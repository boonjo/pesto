import csv

class Book():
    def __init__(self, title, author, genre, rating):        
        self.title = title
        self.author = author
        self.genre = genre
        self.rating = rating
    
    def get_title(self):
        return self.title
        
    def get_author(self):
        return self.author
    
    def get_genre(self):
        return self.genre

    def get_rating(self):
        return self.rating
    
    def set_rating(self, rating=None):
        self.rating = rating
    
    def __str__(self):
        return "% s by % s with a rating of % s from you." % (self.title, self.author, self.rating)
    

def get_goodreads_csv(filename):
    
    file = open(filename)

    csvReader = csv.reader(file)

    header = []
    header = next(csvReader)

    rows = []
    for row in csvReader:
        rows.append(row)
        
    bookshelf = []

    for row in rows:
        for head in header:
            if head == "Author":
                auth = row[2]
            if head == "Title":
                tit = row[1]
            if head == "My Rating":
                rat = row[7]
        book = Book(tit, auth, " ", rat)
        bookshelf.append(book)
        
    file.close()