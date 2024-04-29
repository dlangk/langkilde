import xml.etree.ElementTree as ET
from datetime import datetime
from xml.dom import minidom

from flask import Blueprint, Response

from utils import get_posts

rss_blueprint = Blueprint('rss', __name__)


@rss_blueprint.route('/rss')
def rss():
    # Create the main feed container
    rss = ET.Element("rss", version="2.0")
    channel = ET.SubElement(rss, "channel")

    # Add some information about the channel
    ET.SubElement(channel, "title").text = "Langkilde - Be Busy Building"
    ET.SubElement(channel, "link").text = "https://www.daniel.langkilde.se"
    ET.SubElement(channel, "description").text = "Writing about building things"
    ET.SubElement(channel, "lastBuildDate").text = datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT')

    # Get posts.html
    posts = get_posts()

    # Add blog posts.html to the feed
    for post in posts:
        item = ET.SubElement(channel, "item")
        ET.SubElement(item, "title").text = post['title']
        ET.SubElement(item, "link").text = "/post/" + post['slug']
        ET.SubElement(item, "pubDate").text = post['pub_date']

    # Convert to string and pretty print
    rough_string = ET.tostring(rss, 'utf-8')
    reparsed = minidom.parseString(rough_string)
    pretty_xml_as_string = reparsed.toprettyxml(indent="  ")

    return Response(pretty_xml_as_string, mimetype='application/rss+xml')
