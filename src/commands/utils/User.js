import fs from 'fs';
import path from 'path';
import http from 'http';

import Ora from 'ora';
import terminaLink from 'terminal-link';
import printBlock from '@splash-cli/print-block';
import chalk from 'chalk';

import { config } from '../../extra/config';
import { authenticatedRequest, errorHandler } from '../../extra/utils';

class User {
    static user = config.get('user') || {}

    static auth = {
    	login: () => {
    		const spinner = new Ora('Waiting...');
    		const authURL = `https://unsplash.com/oauth/authorize?client_id=${config.get('keys').applicationId}&redirect_uri=http%3A%2F%2Flocalhost%3A5835%2F&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections`;

    		http.createServer(async (req, res) => {
    			const render = filename => {
    				try {
    					const html = fs.readFileSync(path.join(__dirname, '..', '..', 'pages', filename + '.html'));
    					res.writeHead(200, {
    						'Content-Type': 'text/html'
    					});
    					res.write(html);
    					res.end();
    				} catch (error) {
    					errorHandler(error);
    				}
    			};

    			const send = (data) => {
    				try {
    					res.writeHead(200, {
    						'Content-Type': 'text/html'
    					});
    					res.write(data);
    					res.end();
    				} catch (error) {
    					errorHandler(error);
    				}
    			};

    			const redirect = to => {
    				res.writeHead(302, {
    					'Location': to
    				});
    				res.end();
    			};

    			if (req.url == '/login') return redirect(authURL);

    			if (req.url.includes('code')) {
    				if (req.url.match(/code=(.*)/)[1]) {
    					if (spinner) spinner.text = 'Authenticating...';

    					try {
    						spinner.stop();
    						const authorizationCode = req.url.match(/code=(.*)/)[1];
    						let {
    							body: data
    						} = await authenticate({
    							client_id: 'a70f2ffae3634a7bbb5b3f94998e49ccb2e85922fa3215ccb61e022cf57ca72c',
    							client_secret: '0a86783ec8a023cdfa38a39e9ffab7f1c974e48389dc045a8e4b3978d6966e94',
    							code: authorizationCode,
    							redirect_uri: 'http://localhost:5835'
    						});

    						if (typeof data == 'string') {
    							data = tryParse(data);
    						}

    						if (data.error) {
    							spinner.fail(data.error);

    							send(data.error_description);
    							errorHandler(new Error(data.error_description));

    							setTimeout(() => {
    								process.exit(0);
    							}, 500);

    							return;
    						}

    						unsplash.auth.setBearerToken(data.access_token);

    						config.set('user', {
    							token: data.access_token,
    							refresh: data.refresh_token,
    							profile: {}
    						});

    						send('You can now close this tab.');

    						spinner.stop();

    						return testUserAuth(data);
    					} catch (error) {
    						send('An error is occurred. Please check you terminal app.');
    						spinner.fail('Failed.');
    						errorHandler(error);


    						setTimeout(() => {
    							process.exit(0);
    						}, 500);

    						return;
    					}
    				}
    			}

    			return render('index');
    		}).listen(5835, () => {
    			printBlock(
    				chalk `{yellow {bold Splash CLI:} Please click on the link below to login}`,
    				chalk `{cyan {dim ${terminalLink('Click Here', authURL)}}}`
    			);

    			spinner.start();
    		});
    	},
    	logout: () => {

    	}
    }

    static get() {

    }

    static update() {

    }

    static getLikes() {

    }

    static getCollections() {

    }

    static likePhoto() {
        
    }
}