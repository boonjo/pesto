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
    

