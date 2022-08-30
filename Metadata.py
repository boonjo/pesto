import pandas as pd

df = pd.read_csv("https://www.gutenberg.org/cache/epub/feeds/pg_catalog.csv")

# for i in range(len(df)):
#     df['Title'][i]
#     df['Authors'][i]
    
print(df['Title'])