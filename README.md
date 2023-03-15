## Test Frontend


### Create a Form that contains the following  inputs and their respective Labels : 
 - Name : only alphabetic characters. *Required
 - Surname   : Only alphabetic characters. *Required
 - Birth Date  : should be a valid date . *Required
 - Sex  : Select list. *Required
 - Phone number : Should be valid Russian phone number and auto-formatted like this +7 (999) 999-99-99   *Required
 - Email : it can be empty , if not empty it should be a valid e-mail adresse
 - Adresse 
 - Do you Agree to submit your infos? Input radio (“yes” / “no” ) with default value “no”   *Required
 - A Submit button and Reset button

```PS: *Required means that the input shouldn’t be empty```

 - The Form should be responsive 
 - The page have a background 
 - When clicking the Reset button, all inputs should be emptied
 - When clicking Submit button : 
 1. if at least 1 input didn’t pass the validation, the input border should change to red and an error message will be shown to user 
 2. if user didn’t agree to submit his infos, then an alert should be shown to warnt he user about it
 3. if all validation passed: a pop-up message will show-up and it contains the following message => “Thanks you {Name} + {Surname} for submitting the form”

# Для запуска проекта в терминале набрать команды:
```
git clone https://github.com/nskpsv/appio.git
cd appio
npm i
npm start
```
