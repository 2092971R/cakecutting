from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    # Construct a dictionary to pass to the template engine as its context.
    # Note the key boldmessage is the same as {{ boldmessage }} in the template!
    context_dict = {'boldmessage': "I am bold font from the context"}

    # Return a rendered response to send to the client.
    # We make use of the shortcut function to make our lives easier.
    # Note that the first parameter is the template we wish to use.

    return render(request, 'project/index.html', context_dict)
	
def twoperson(request):
    return render(request, 'project/twoperson.html')
	
def threeperson(request):
    return render(request, 'project/threeperson.html')
	
def movingknife(request):
    return render(request, 'project/movingknife.html')
	
def fourperson(request):
    return render(request, 'project/fourperson.html')
	
def about(request):
    return render(request, 'project/about.html')