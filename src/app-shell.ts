import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import { sharedStyles } from './styles/shared-styles.ts';
import './components/page-home.ts';
import './components/page-resume.ts';

@customElement('app-shell')
export class AppShell extends LitElement {
    static styles = [
        sharedStyles,
        css`
            :host {
                display: block;
            }

            .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 2rem;
                min-height: 100vh;
            }

            nav {
                margin-bottom: 3rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid var(--bg-lighter);
            }

            nav ul {
                list-style: none;
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin: 0;
                padding: 0;
            }

            nav a {
                color: var(--fg-secondary);
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                font-size: 0.9rem;
                padding: 0.5rem 0;
                border-bottom: 2px solid transparent;
                transition: all 0.2s ease;
            }

            nav a:hover {
                color: var(--accent-orange);
                border-bottom-color: var(--accent-orange);
            }

            nav a:focus {
                outline: 2px solid var(--accent-yellow);
                outline-offset: 2px;
            }

            @media (max-width: 768px) {
                .container {
                    padding: 1rem;
                }

                nav ul {
                    flex-direction: column;
                    gap: 1rem;
                    text-align: center;
                }
            }

            @media (max-width: 480px) {
                .container {
                    padding: 0.5rem;
                }
            }

            @media print {
                nav {
                    display: none;
                }

                .container {
                    max-width: none;
                    padding: 0.4in;
                    margin: 0;
                }
            }
        `,
    ];

    private router = new Router(this, [
        { path: '/', render: () => html`<page-home></page-home>` },
        { path: '/resume', render: () => html`<page-resume></page-resume>` },
    ]);

    render() {
        return html`
            <div class="container">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/resume">Resume</a></li>
                    </ul>
                </nav>
                ${this.router.outlet()}
            </div>
        `;
    }
}
