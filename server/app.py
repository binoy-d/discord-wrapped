import json
from os.path import exists
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)





def _cors(response):
    '''Adds Access-Control-Allow-Origin header to response

    Args:
        response (response object): the response, without cors

    Returns:
        response object: the response, now with cors
    '''
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route("/data", methods=['GET'])
def data():
    '''Gets data given a super secret key

    Returns:
        response object: contains object with keys for data
    '''
    key = request.args.get('key')
    print(key)
    if(key == "dabrian"):
        response = {
            "status": "success"
        }
        response = jsonify(response)
        return _cors(response)
    
    response = {
        "status": "invalid"
    }
    response = jsonify(response)
    return _cors(response)

@app.route("/members", methods = ['GET'])
def members():
    '''tracks /members GET endpoint

    Returns:
        response: contains object with list of members
    '''
    with open("./data/members.json", encoding="utf-8") as f:
        response = jsonify(json.load(f))
        return _cors(response)

@app.route("/channels", methods = ['GET'])
def channels():
    '''tracks /channels GET endpoint

    Returns:
        response: contains object with list of channels
    '''
    with open("./data/channels.json", encoding="utf-8") as f:
        response = jsonify(json.load(f))
        return _cors(response)

@app.route("/bubble_messages", methods = ['GET'])
def bubble_messages():
    '''tracks /bubble_messages GET endpoint

    Returns:
        response: contains object with list of messages
    '''
    with open("./data/bubble_messages.json", encoding="utf-8") as f:
        response = jsonify(json.load(f))
        return _cors(response)

@app.route("/channel/<channel_name>", methods = ['GET'])
def channel(channel_name="default"):
    '''tracks /bubble_messages/<channel_name> GET endpoint

    Returns:
        response: contains object with all the json data for that channel
    '''
    if not exists(f"./data/channels/{channel_name}.json"):
        channel_name = "default"

    with open(f"./data/channels/{channel_name}.json", encoding="utf-8") as f:
        response = jsonify(json.load(f))
        return _cors(response)



@app.route("/channel/<channel_name>/messagecount", methods = ['GET'])
def channel_messagecount(channel_name="default"):
    '''tracks /bubble_messages/<channel_name> GET endpoint

    Returns:
        response: contains object with all the json data for that channel
    '''
    if not exists(f"./data/channels/{channel_name}.json"):
        channel_name = "default"

    with open(f"./data/channels/{channel_name}.json", encoding="utf-8") as f:
        response = json.load(f)
        num_messages = 0
        if channel_name!="default":
            num_messages = len(response["messages"])
            response = {"channel":channel_name, "num_messages":num_messages}
        response = jsonify(response)
        return _cors(response)




if __name__ == "__main__":
    app.run(debug=True)