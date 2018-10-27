Data set: BuyerSellerIndex_Zip_Cleaned

	This index combines the sale-to-list price ratio, the percent of homes that subject to a price cut and the time properties spend on the market (measured as Days on Zillow). Higher numbers indicate a better buyers’ market, lower numbers indicate a better sellers’ market, relative to other markets within a metro.

	Interested columns:
		Zip, PctPriceCut, DaysOnMarket, BuyerSellerIndex

	Notes:
		BuyerSellerIndex gets an R^2 of 0.660 when regressed on State, DaysOnMarket and PctPriceCut

		Flipper:
			Will care much more about the DaysOnMarket then the BuyerSellerIndex.
				The DaysOnMarket will be important when they try to resell the house.
				The BuyerSellerIndex is unlikely to flip from a buyers market (when they are looking to buy) and then to a sellers market (when they are looking to sell) in a short time frame, so this shouldn't matter too much since a flipper will be both a buyer and a seller in a short time frame.

		Landlord:
			Will care more about the BuyerSellerIndex.
				A landlord will want a market that has a higher BuyerSellerIndex since this signifies that the zip code is a buyer's market.


Dataset: MarketHealthIndex_Zip_Cleaned
	Market Health Index: This index indicates the current health of a given region’s housing market relative to other markets nationwide. It is calculated on a scale from 0 to 10, with 0 representing the least healthy markets and 10 the healthiest markets.

	Note: ZHVI: stands for Zillow Home Value Forecast

	Interested Columns:
		Zip, MarketHealthIndex, (and maybe ZHVI?)



Data sets (all time series datasets): 
	Zip_PctOfHomesIncreasingInValues_AllHomes_Cleaned (1997-02 to 2018-08, mostly "full" from the mid 2000s onwards)
		The percentage of homes in a given region with values that have increased in the past year.

		-A flipper would be interesting in this more than a landlord. A flipper would want to make sure their investment wasn't going to decline while they were working on flipping. 

	Zip_PctOfHomesDecreasingInValues_AllHomes_Cleaned (1997-02 to 2018-08, mostly "full" from the mid 2000s onwards)
		The percentage of homes in a given region with values that have decreased in the past year.

		-A flipper would be interesting in this more than a landlord. A flipper would want to make sure their investment wasn't going to decline while they were working on flipping. 

	Sale_Prices_Zip_Cleaned (2008-03 to 2018-08, lots of missing data if you go back more than a few years)
		Median of the selling price for all homes sold in a given region.

		-Both a flipper and a landlord would want to know how much their house will cost them so they know how much cash they need
		-We might want to have an option to filter houses that are outside of their budget

	Zip_PriceToRentRatio_AllHomes_Cleaned.csv (2010-10 to 2018-08, mostly "full" for all time periods)
		Price to Rent Ratio: This ratio is first calculated at the individual home level, where the estimated home value is divided by 12 times its estimated monthly rent price. The the median of all home-level price-to-rent ratios for a given region is then calculated.

		-A landlord would want this number to be low while a flipper probably wouldn't care 

	Zip_Zri_SingleFamilyResidenceRental_Cleaned (2010-11 to 2018-09, mostly "full" for all time periods)
		ZRI (Zillow Rent Index): Median of the estimated rent price for all homes

		-A landlord would want to know how much rent they could collect, a flipper wouldn't care about this

	Zip_MedianValuePerSqft_AllHomes_Cleaned (1996-04 to 2018-08, mostly "full" for all time periods)
		Median of the value of all homes per square foot. This number is calculated by taking the estimated home value for each home in a given region and dividing it by the home’s square footage

		-Both a flipper and a landlord might be interested in this metric
