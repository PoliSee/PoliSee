import csv
import json
import re
import nltk.sentiment
import pandas as pd

with open('gov_cand.csv', 'r') as govcsvfile:
    with open('tweetsentiment.json', 'w') as tweet_sentiment_file:
        fields = ("candidateState","name", "twitter_link", "party", "twitter_handle")

        #skip the first line
        first_line = True

        #get information on candidates from candidate csv file
        reader = csv.DictReader(govcsvfile, fields)

        #loop through candidate file
        for row in reader:
            #save their twitter_link
            twitter_handle = row["twitter_handle"]

            #this skips the first line
            if first_line:
                first_line = False

            #this checks if the candidate had a twitter handle
            elif twitter_handle[0:3] != "No ":

                #this will be our dictionary
                twit_data = row


                #navigate to this candidate's tweet csv
                #if we go from the 24th index to the end, we get their handle
                #the first part is https://twitter.com/
                file_string = 'OldTweets/' + twitter_handle + '.csv'
                print(file_string)

                #loop through the csv containing tweets
                #this holds our sentiment calculation and dates
                sentiment_list = []

                with open(file_string, 'r') as tweets_file:

                    tweet_reader = csv.reader(tweets_file, delimiter=',')

                    #create sentiment analyzer object
                    tweet_analyzer = nltk.sentiment.vader.SentimentIntensityAnalyzer()

                    #this is garbage, it grabs one out of 30 tweets
                    tweet_cutter = 0

                    for tweet_row in tweet_reader:
                        tweet_cutter += 1
                        if tweet_cutter % 30 == 0:
                            #handle sentiment calculation
                            clean_text = re.sub(r"http\S+", "", tweet_row[0])
                            #remove special characters
                            clean_text = ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)"," ",clean_text).split())
                            #remove RT prefix for retweets
                            clean_text = clean_text.replace("RT ",  "")

                            #this generates a dictionary containing VADER's sentiment analysis
                            sentiment_dict = tweet_analyzer.polarity_scores(clean_text)

                            #this extracts only the compound score from the sentiment dictionary
                            compound_sentiment_score = sentiment_dict["compound"]

                            #create a dict to hold date and sentiment for this tweet
                            sentiment_instance = {"datetime" : tweet_row[2],
                                                  "sentiment_score" : compound_sentiment_score,
                            }

                            #add this instance to the sentiment_list
                            sentiment_list.append(sentiment_instance)

                #add sentiment_list to this candidates JSON dictionary
                twit_data["sentimentScores"] = sentiment_list

                #clear the sentiment list
                sentiment_list = []

                #write this candidates information to their JSON file

                json.dump(twit_data, tweet_sentiment_file, sort_keys = True, indent = 4)
                tweet_sentiment_file.write('\n')

                #break to get only the first cand with a twitter handle
                #break


            #this handles the case where the candidate does not have a twitter handle
            else:
                json.dump(row, tweet_sentiment_file, sort_keys = True, indent = 4)
                tweet_sentiment_file.write('\n')
