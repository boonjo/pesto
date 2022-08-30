import csv
import pandas as pd

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
        
    def set_genre(self, genre=None):
        self.genre = genre
    
    def __str__(self):
        # TODO: Change the wording of this
        return "% s by % s with a rating of % s from you." % (self.title, self.author, self.rating)
    

def get_goodreads_csv(filename):
    
    df = pd.read_csv(filename)
    
    bookshelf = []
    for i in range(len(df)):
        book = Book(df['Title'][i], df['Author'][i], " ", df['My Rating'][i])
        bookshelf.append(book)
    
    return bookshelf
    
bookshelf = get_goodreads_csv("goodreads_library_export.csv")

print(bookshelf[0])