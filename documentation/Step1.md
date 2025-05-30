# LedgerPay

## First step:

This documentaion is for the first steps to start the project for any user of the repo.

### Steps to Set Up the Project

#### 1 - Make sure `python` and `git` are installed on your machine

#### 2 - Clone the repo 
Using the link from the **code** slide-down in the github page.

```bash
git clone https://github.com/kdukuray/topics-in-software-engineering.git
```
#### 3 - Move to the project folder
Make sure to be in the `topics-in-software-engineering` folder.
```bash
cd topics-in-software-engineering
```
---


#### 3.5 - Additional optional step for testing branches code

- Check the remote branches and brake the loop with `Q`
```bash
git branch -a
```
- Use `checkout` to switch to the remote branch of your choice
```bash
git checkout remotes/origin/review
```


---
#### 4 - Create a Virtual Environment
Create a virtual environment for the project. And then activate it.
```bash
python -m venv env
```
```bash
./env/Scripts/activate
```

#### 5 - Install requirments

```bash
pip install -r requirements.txt
```

#### 6 - Run the current Django project and go to [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

```bash
python ledgerpay/manage.py runserver
```
#### 7 - Now you can visit:
- sign-in
- dashboard after sign-in
- Django admin page [Link](http://127.0.0.1:8000/admin/)

## Check [Step2.md](Step2.md) for details on how to use the framework for development.