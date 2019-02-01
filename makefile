

DESTDIR ?= 

all:
	@echo nothing

install:
	mkdir -p $(DESTDIR)/usr/share/plasma/desktoptheme/
	mkdir -p $(DESTDIR)/usr/share/plasma/look-and-feel/
	cp -a desktoptheme/* $(DESTDIR)/usr/share/plasma/desktoptheme/
	cp -a look-and-feel/* $(DESTDIR)/usr/share/plasma/look-and-feel/

