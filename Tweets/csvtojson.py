import csv
import json
import datetime

with open('gov_cand.csv', 'r') as govcsvfile:
    with open('tweetsentiment.json', 'w') as tweet_sentiment_file:
        fields = ("candidateState","name", "twitter_handle", "party")

        #skip the first line
        first_line = True

        #get information on candidates from candidate csv file
        reader = csv.DictReader(govcsvfile, fields)

        #loop through candidate file
        for row in reader:
            #save their twitter_link
            twitter_link = row["twitter_handle"]

            #this skips the first line
            if first_line:
                first_line = False

            #this checks if the candidate had a twitter handle
            elif twitter_link[0] == 'h':

                #this will be our dictionary
                twit_data = row

                '''
                #navigate to this candidate's tweet csv
                #if we go from the 24th index to the end, we get their handle
                #the first part is https://twitter.com/
                file_string = 'TweetData/' + twitter_handle[24:] + '.csv'
                print(file_string)

                #loop through the csv containing tweets
                #this holds our sentiment calculation and dates
                sentiment_dict = {}
                with open(file_string, 'r') as tweets_file:

                    tweet_reader = csv.reader(tweets_file, delimiter=',')

                    for row in tweet_reader:
                        #handle sentiment calculation
                '''

                #for now we add made up data
                my_list = []
                sample_dict = {
                    date : '2018-3-15',
                    sentiment: 30
                }

                '''
                                '2018-3-14' : 52,
                                '2018-3-15' : 53,
                                '2018-3-16' : 54,
                                '2018-3-17' : 51,
                                '2018-3-18' : 47,
                                '2018-3-19' : 46,
                                '2018-3-20' : 47,
                                '2018-3-21' : 49,
                                '2018-3-22' : 51,
                                '2018-3-23' : 53,
                                '2018-3-24' : 54,
                                '2018-3-25' : 54
                                }

                '''

                #add to twit_data
                twit_data["sentimentScores"] = sample_dict




                json.dump(twit_data, tweet_sentiment_file, sort_keys = True, indent = 4)
                tweet_sentiment_file.write('\n')

                #breaks for now
                break

            #this handles the case where the candidate does not have a twitter handle
            else:
                json.dump(row, tweet_sentiment_file)
                tweet_sentiment_file.write('\n')
