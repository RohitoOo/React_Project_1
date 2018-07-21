import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.data =  {
	firstName: 'Rohito',
	lastName: 'Bhambhani',
	image: 'https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/19895028_10211949426644823_8064490458382315371_n.jpg?_nc_cat=0&oh=66a25efea8a97ff374909960f835362e&oe=5B992E3B',
	details: [
		{
			provider: 'Facebook',
			username: 'Rohito',
			engagement: ['Personal'],
			link: ''
		},
		{
			provider: 'Github',
			username: 'RohitoOo',
			engagement: ['Professional'],
			link: 'https://github.com/rohitoOo'
		},
		{
			provider: 'Gmail',
			username: 'bhambhani.ba@gmail.com',
			engagement: ['Professional', 'Personal'],
		},
		{
			provider: 'Youtube',
			channel: 'Rohito',
			url: 'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/featured',
			engagement: ['Professional'],
		},
		{
			provider: 'Instagram',
			type: 'photos',
			url: 'https://www.instagram.com/rrrohito/?hl=en',
			engagement: ['Personal'],
		},
		{
			provider: 'LinkedIn',
			type: 'photos',
			url: 'https://www.linkedin.com/in/rohitbhambhani/',
			engagement: ['Professional'],
		}
	]
}

ReactDOM.render(<App data={window.data} />, document.getElementById('root'));
registerServiceWorker();
