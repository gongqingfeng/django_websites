from django.shortcuts import render


def index(request):
	context = {}
	return render(request, 'index.html', context)

def zhizhu(request):
	context = {}
	return render(request, 'zhizhu.html', context)

def yongdu(request):
	context = {}
	return render(request, 'yongdu.html', context)

def wuran(request):
	context = {}
	return render(request, 'wuran.html', context)

def shenghuo(request):
	context = {}
	return render(request, 'shenghuo.html', context)

def zonghe(request):
	context = {}
	return render(request, 'zonghe.html', context)

def about(request):
	context = {}
	return render(request, 'about.html', context)
