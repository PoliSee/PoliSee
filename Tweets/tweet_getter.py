import tweepy
import os
import csv

#get keys from environment
TWITTER_CONSUMER_KEY = os.environ.get("TWITTER_CONSUMER_KEY")
TWITTER_CONSUMER_SECRET = os.environ.get("TWITTER_CONSUMER_SECRET")
TWITTER_ACCESS_TOKEN = os.environ.get("TWITTER_ACCESS_TOKEN")
TWITTER_ACESS_TOKEN_SECRET = os.environ.get("TWITTER_ACESS_TOKEN_SECRET")


#set up authentication for API
auth = tweepy.OAuthHandler(TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET)
auth.set_access_token(TWITTER_ACCESS_TOKEN, TWITTER_ACESS_TOKEN_SECRET)

#waiting on rate limit should keep us from exceeding it
api = tweepy.API(auth, wait_on_rate_limit = True)

#if couldn't access API, print message
if (not api):
    print("Problem connecting to API")
else:
    #start running through twitter handle list
    gov_count = 0
    #open csv containing twitter handles
    with open('gov_cand.csv', newline='') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')

        #for every row, take the handle entry
        for row in csv_reader:
            twitter_handle = row[4]
            party_align = row[3]

            #if entry starts with @, we know that this gov candidate has a handle
            if party_align == 'R ' or party_align == 'D ':
                #print API rate limit status
                print(api.rate_limit_status()['resources']['search'])

                #print the handle
                print("Account " + twitter_handle)

                #increment gov_count and complete the search
                gov_count += 1
                search = tweepy.Cursor(api.search, q = twitter_handle, tweet_mode = "extended").items(1000)

                #count the number of tweets that were searched
                count = 0
                tweet_list = []

                #add header row
                tweet_list.append(["Text", "Handle", "Time Created", "Location"])

                #append tweets
                for tweet in search:
                    #increment count
                    count += 1
                    #append tweet information to our "row list"
                    tweet_list.append([tweet.full_text, tweet.user.screen_name, str(tweet.created_at), tweet.user.location])

                #print number of tweets got for this candidate
                print("Number of tweets: " + str(count))

                #generate file string
                file_string = 'TweetData/' + twitter_handle + '.csv'

                #write entries of tweet_list to csv
                with open(file_string, mode='w') as csv_file:
                    csv_writer = csv.writer(csv_file, delimiter=',')

                    #1 sublist of tweet_list = 1 row of the csv
                    for tweet in tweet_list:
                        csv_writer.writerow(tweet)

                    #show that we've finished writing for the candidate
                    print("Finished writing for " + twitter_handle + ".")

    #print the number of accounts that we completed searches for
    print("# of accounts searched: " + str(gov_count))
