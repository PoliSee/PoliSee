import csv
import json
import re
import nltk.sentiment

count = 0
with open('gov_cand.csv', 'r') as govcsvfile:
    with open('tweetsentiment.json', 'w') as tweet_sentiment_file:
        fields = ("candidateState","name", "twitter_link", "party", "twitter_handle")
        alljsonlist = []

        #skip the first line
        first_line = True

        #get information on candidates from candidate csv file
        reader = csv.DictReader(govcsvfile, fields)

        #loop through candidate file
        for row in reader:
            count += 1
            if count > 110:
                break
            #save their twitter_link
            twitter_handle = row["twitter_handle"]
            cand_party = row["party"]

            #this skips the first line
            if first_line:
                first_line = False

            #this checks if the candidate had a twitter handle
            elif twitter_handle[0:3] != "No " and cand_party == "R " or cand_party == "D ":

                #this will be our dictionary
                twit_data = row


                #navigate to this candidate's tweet csv
                #if we go from the 24th index to the end, we get their handle
                #the first part is https://twitter.com/
                file_string = 'TweetData/' + twitter_handle + '.csv'
                print(file_string)

                #loop through the csv containing tweets
                with open(file_string, 'r') as tweets_file:

                    tweet_reader = csv.reader(tweets_file, delimiter=',')

                    #create sentiment analyzer object
                    tweet_analyzer = nltk.sentiment.vader.SentimentIntensityAnalyzer()

                    #get first date for the first bin
                    first_line = True
                    first_date = True

                    #this holds our sentiment calculation and dates
                    sentiment_list = []

                    #this holds the sum of the sentiment scores for the bin
                    total_sentiment = 0
                    #this holds the number of tweets in the bin for a given date
                    bin_size = 0

                    for tweet_row in tweet_reader:
                        if first_line:
                            first_line = False
                            continue

                        if first_date and tweet_row[2] != "Time Created":
                            bin_date = tweet_row[2][0:10]
                            print(bin_date)
                            first_date = False


                        #date for curent tweet
                        current_date = tweet_row[2][0:10]

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

                        if current_date == bin_date:
                            bin_size += 1
                            total_sentiment += compound_sentiment_score
                        else:
                            #create a dict to hold date and sentiment for this tweet
                            sentiment_instance = {"date" : bin_date,
                                                  "sentiment_score" : round((total_sentiment / bin_size),3),
                            }

                            #add this instance to the sentiment_list
                            sentiment_list.append(sentiment_instance)

                            #reset sums and counters
                            bin_size = 1
                            bin_date = current_date
                            total_sentiment = compound_sentiment_score

                #add sentiment_list to this candidates JSON dictionary
                twit_data["sentimentScores"] = sentiment_list

                #clear the sentiment list
                sentiment_list = []

                #ordering is democract, republican by state (goes dem, rep, dem, rep, within the JSON)
                if len(alljsonlist) > 0 and alljsonlist[-1]["candidateState"] == twit_data["candidateState"]:
                    if twit_data["party"] == "D ":
                        alljsonlist.insert(-1, twit_data)
                    else:
                        alljsonlist.append(twit_data)
                else:
                    alljsonlist.append(twit_data)

                #break to get only the first cand with a twitter handle
                #break


            #this handles the case where the candidate does not have a twitter handle
            else:
                #we have decided that if the candidate is not dem or repub, we will not include them.
                '''
                row_temp = row
                row_temp["sentimentScores"] = []
                print(type(row_temp))
                alljsonlist.append(row_temp)
                '''

        json.dump(alljsonlist, tweet_sentiment_file, sort_keys = True, indent = 4)
        tweet_sentiment_file.write('\n')
