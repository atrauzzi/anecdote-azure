FROM ubuntu:xenial
MAINTAINER "Alexander Trauzzi" <atrauzzi@gmail.com>

RUN apt-get update -y
RUN apt-get install -y \
	curl \
	git \
	mercurial \
	python \
	python-dev \
	python-setuptools \
	ruby \
	ruby-dev \
	libssl-dev \
	libffi-dev \
	libxml2-dev \
	libxslt-dev \
	zip \
	coreutils \
	build-essential

RUN easy_install pip

RUN pip install azure-cli

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

RUN npm install -g yarn

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /app
