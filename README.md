# GO-teach

## Project description

This project is a tool developed to assist teachers in creating personalized and effective teaching strategies by utilizing advanced language models to generate adaptive educational content. Go-teach was designed as an interface to simplify the engineering prompt process for teachers with interactive forms, providing context and prompts for each strategy.

This project uses the article [Using AI to Implement Effective Teaching Strategies in Classrooms: Five Strategies, Including Prompts](https://deliverypdf.ssrn.com/delivery.php?ID=893002127097029117075114065114007086117078019060066055110022085103024086069023103068013121004003017116060031096010069069100119116082071048061023028105094080118120093038060013113090001087024124006098122110064091119002121066123101122109096110107081026093&EXT=pdf&INDEX=TRUE) from Dr. Ethan Mollick and Dr. Lilach Mollick to developer the strategies.

## About the GenAI in Education @ EAR

This project is a colab between CIn (Informatic center) and the EAR (American School of Recife) lidered by [Fabio Queda](https://sigaa.ufpe.br/sigaa/public/docente/portal.jsf?siape=1170990).

- Long term and broad [project description](https://docs.google.com/document/d/1zVVKSJxIOGAvF0cbEWdBy2E25-gklVv91nKlSyepXIY/edit#heading=h.rm8g348ktunf).


## About the Go-teach

The project features 4 pages, reflecting its architecture:

- The ```main``` page is 'Home'.
- The ```about``` page provides a brief description of GenAI in Education @ EAR.
- The ```strategies``` page includes a menu where users can choose among the strategies to view a summary.
- The ```promptGenerator``` is a form that varies with the selected strategy, ending with options for the user to choose the desired context and prompt version.

## Architeture


```
.
├── src/
│   ├── lib/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── appComponents/
│   │   │   ├── globalComponents/
│   │   │   │   └── MyComponent/
│   │   │   │       ├── MyComponent.vue
│   │   │   │       ├── MyComponent.test.ts
│   │   │   │       └── style.scss
│   │   ├── types
│   │   ├── utils
│   └── routes
├── variables.scss
├── app.scss
└── ...
```

### How to manage the forms?
Inside the folder ```lib/components/appComponents/PromptGenerator``` there is a folder named ```Data``` containing 3 JSON files. 
- ```strategy_questions```-> this json contains the questions for the teachers. Each strategy has ```forms``` parameter with objects specifying the question type ```select | input | text-area```. Select types include multiple ```options```, and the options parameter lists these choices. The input and text-area types do not require additional parameters. Each object includes the ```question``` text under question, a ```mandatory``` boolean (true | false), and a ```key```   representing the value used in the context or prompt.
- ```strategy_context``` -> this json has the 5 strategies and each strategy has a parameter called ```contexts``` and each context have it version and the context text. The text must have a skeleton and the parts that need to be replaced you must use the bracets and put the key value between. Example: You create a key inside the ```strategy_questions``` called subject, when you create the context text when you want to replace this field with the given subject you must to put ```{subject}``` inside the text and specify the version.
- ```strategy_prompt``` -> Operates similarly to ```strategy_context```, replacing keys with form input values as needed.

### How to manage the strategy resume text?
Within ```lib/components/appComponents/Strategies/Strategy``` there is a file for each strategy and a function to streamline the code

## Tecnology
The project primarily uses Svelte and Sass.

### How to use?
- Ensure Node.js is installed on your computer along with an IDE (like Visual Studio)
- Clone the repository ```git clone https://github.com/tms-5/intelli-teach```
- Install dependencies ```npm install```
- Run the project using ```npm run dev```

## Next steps
- [x] Create the project architeture
- [x] Create global components
- [x] Create the Main page
- [x] Create the About page
- [x] Create the Strategy page
- [x] Create the Prompt Generator page
- [x] Add the forms questions
- [x] Add the contexts
- [x] Add the prompts
- [ ] Change the Strategies text
    > Is missing the 3, 4 and 5 strategies and finish the 2nd.
- [ ] Integrate with Chat GPT
- [ ] Validate the interface with the teachers