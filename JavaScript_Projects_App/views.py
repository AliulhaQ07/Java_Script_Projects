from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, "index.html")


def project1(request):
    return render(request, "project_1.html")


def bmi_calculator(request):
    return render(request, "bmi_calculator.html")


def pennywise(request):
    return render(request, "pennywise.html")
