from bs4 import BeautifulSoup
import csv
import time
import urllib2

#open governor name file
with open("Govs.csv") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0

    #skip the first line in the csv file (it's a header)
    firstline = True

    for row in csv_reader:
        #add a short delay so we don't make requests too fast
        time.sleep(1)

        #get governor name from row
        gov_name = row[1]

        #replace space in name with underscore
        gov_name = gov_name.replace(" ", "_")

        #this skips the first line
        if firstline:
            firstline = False
        else:
            #build url string
            url_string = "https://ballotpedia.org/" + gov_name
            print("URL attempted: " + url_string)

            #get HTML of page
            try:
                page = urllib2.urlopen(url_string)
            except urllib2.HTTPError, e:
                page = None
                print(e.code)
            except urllib2.URLError, e:
                page = None
                print(e.args)

            #parse HTML using BeautifulSoup and store in var "soup"
            if page:
                print("Page found.")
                soup = BeautifulSoup(page, 'html.parser')

                #this is a bs4 element representing the first <a> tag
                twitter_handle = soup.find('a', string = "Twitter")

                #if we found a twitter handle
                if twitter_handle:
                    line_count += 1
                    print("Twitter link: " + twitter_handle.get('href'))

                    #append to file
                    with open("handles.txt", "a") as text_file:
                        text_file.write(twitter_handle.get('href')+ "\n")
                #didn't find the handle
                else:
                    with open("handles.txt", "a") as text_file:
                    text_file.write("No Twitter\n")
            #didn't have a page for this candidate
            else:
                with open("handles.txt", "a") as text_file:
                    text_file.write("No Page\n")

    #print num of twitter handles found
    print(str(line_count) + " twitter links found.")
