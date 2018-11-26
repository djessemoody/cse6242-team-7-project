import requests
from xml.etree import ElementTree
import json
import csv
import time

zipList = {}

class ZipRating(object):
    average = 0
    num_entries = 0

    def __init__(self, average, num_entries):
        self.average = average
        self.num_entries = num_entries

def make_zip_rating(average, num_entries):
    zipRating = ZipRating(average, num_entries)
    return zipRating

with open('schools_by_zip_clean.csv') as zipCsv:
    csv_reader = csv.DictReader(zipCsv, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count != 0:
            if row["Zip"] in zipList:
                zipList[row["Zip"]] = ((zipList[row["Zip"]].average * zipList[row["Zip"]].num_entries) + row["Rating"])/(zipList[row["Zip"]].num_entries + 1)
            zipList.append(make_zip_rating(row[""], row["RegionName"]))
        else:
            zipList[row["Zip"]] = make_zip_rating(row["Rating"], 1)

with open('schools_by_zip_aggregate.csv', 'w') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    for zip in zipList:
        writer.writerow([zip, zipList[zip].average])
