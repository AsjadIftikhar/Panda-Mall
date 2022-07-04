# Panda Mall
## A Web based Recommendation System for Fashion Products.

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/AsjadIftikhar/Panda-Mall.git)

The Websites personalize the recommendation of fashion products based on customer preferences, history and improves results over time.
It allows Brands to register their stores and add, delete, update products to be recommended to customers and guage the performance of the brand using the dashboard.
It lets admins suspend products in case of policy Violation
 
It is an Final Year Project with following contributors:
- Asjad Iftikhar
- Tayyab Waseem
- Muhammad Zain

## Features

A complete description of the entire project can be found in the following Document: 

- [Panda Mall Report](https://github.com/AsjadIftikhar/Panda-Mall/blob/main/FYP-II/D4/Panda%20Mall_Updated%20Report.pdf)

## Screenshots of Store Side:

### Login Page

<img src="imgs/login.png" alt="Login" />

### Home Page CRUD

<img src="imgs/home.png" alt="HOME" width="400"/>
<img src="imgs/Add.png" alt="ADD" width="400"/>


### Dashboard

<img src="imgs/dash1.png" alt="Dashboard" width="400"/>
<img src="imgs/dash2.png" alt="Dashboard 2" width="400"/>

### Profile Page

<img src="imgs/profile.png" alt="Profile" width="400"/>

## Installation

Panda Mall use Python Django for Backend adnd Create React App for Frontend Development

For Backend

Clone Code in a directory
setup a python 3.9 pipenv interpreter

```sh
pipenv install
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

Frontend
Clone Code in a separate directory
Requires Node v14+, NPM

```sh
npm install
npm run dev

```


