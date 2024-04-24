import requests 
from bs4 import BeautifulSoup 
import sys

if( len(sys.argv) <2):
    print("Enter url ")
    exit(0)

# specify the URL of the archive here 
archive_url = sys.argv[1]



def get_image_links(): 
	
	# create response object 
	r = requests.get(archive_url) 
	
	# create beautiful-soup object 
	soup = BeautifulSoup(r.content,'html5lib') 
	
	links = soup.findAll('a') 

	# filter the link sending with .mp4 
	image_links = [archive_url + link['href'] for link in links if link['href'].endswith('jpg') ] 
	# print(image_links)
	return image_links 


def download_image_series(image_links): 

	for link in image_links: 

		'''iterate through all links in image_links 
		and download them one by one'''
		
		# obtain filename by splitting url and getting 
		# last string 
		file_name = link.split('/')[-1] 
		print(file_name)
		print( "Downloading file:%s"%file_name) 
		
		# create response object 
		r = requests.get(link, stream = True) 
		
		# download started 
		with open(file_name, 'wb') as f: 
			for chunk in r.iter_content(chunk_size = 1024*1024): 
				if chunk: 
					f.write(chunk) 
		
		print( "%s downloaded!\n"%file_name )

	print( "All images downloaded!")
	return


if __name__ == "__main__": 

	image_links = get_image_links() 
	download_image_series(image_links) 
	
