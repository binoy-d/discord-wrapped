from pymongo import MongoClient
import lorem


def main():
    client = MongoClient(port=27017)
    db=client.admin
    dbinfo = {
        "$set":  {
            "channels": ["general", "ninjas-text", "cool-shit", "monk-wisdom", "vent-overshare", "wholesome", "art-music-culture"],
        "members": ["binoy", "shaurya", "evan", "atul", "ninja"],
        "pinned_messages": [lorem.sentence() for i in range(100)]
        }
        
    }
    result = db.information.update_one({"_id": "scum"}, dbinfo)
    print(f"inserted id: {result.__dict__.keys()}")


if __name__ == '__main__':
    main()