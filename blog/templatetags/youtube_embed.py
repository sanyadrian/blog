from django import template
import re

register = template.Library()

@register.filter
def youtube_embed(url):
    if 'youtube.com' in url:
        video_id = re.findall(r'v=([^&]+)', url)
        if video_id:
            return f'https://www.youtube.com/embed/{video_id[0]}'
    return url
