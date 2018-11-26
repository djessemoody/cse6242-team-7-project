import requests
from xml.etree import ElementTree
import json
import csv
import time

zipList = []

class ZipState(object):
    state = ""
    zip = 0

    def __init__(self, state, zip):
        self.state = state
        self.zip = zip

def make_zip_state(state, zip):
    zipState = ZipState(state, zip)
    return zipState

with open('BuyerSellerIndex_Zip.csv') as zipCsv:
    csv_reader = csv.DictReader(zipCsv, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count != 0:
            zipList.append(make_zip_state(row["State"], row["RegionName"]))
        line_count += 1

with open('schools_by_zip.csv', 'w') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    for zipState in zipList:
        try:
            request = requests.get('https://api.greatschools.org/search/schools?key=028256bebab46146e09b3a9ff0bb642d&state=%s&q=%s' % (zipState.state,zipState.zip))
            root = ElementTree.fromstring(request.content)
            for school in root:
                print(school[1].text)
                writer.writerow([zipState.zip, school[1].text, school[5].text])
        except:
            print 'failed for some reason'




#print(zipList)
