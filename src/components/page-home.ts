import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared-styles.ts';

@customElement('page-home')
export class PageHome extends LitElement {
    static styles = [
        sharedStyles,
        css`
            .intro {
                text-align: center;
                margin-bottom: 3rem;
                padding: 2rem 0;
            }

            .intro h1 {
                margin-bottom: 0.5rem;
            }

            .intro h2 {
                font-weight: 300;
                font-size: 1.5rem;
                border: none;
                margin-bottom: 1rem;
                padding: 0;
            }

            .intro p {
                font-size: 1.1rem;
                max-width: 600px;
                margin: 0 auto 2rem;
            }

            .connect-links {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-top: 2rem;
            }

            .connect-links a {
                padding: 0.75rem 1.5rem;
                background-color: var(--bg-light);
                border: 1px solid var(--bg-lighter);
                border-radius: 4px;
                transition: all 0.2s ease;
            }

            .connect-links a:hover {
                background-color: var(--bg-lighter);
                border-color: var(--accent-orange);
            }

            @media (max-width: 768px) {
                .connect-links {
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
            }

            @media (max-width: 480px) {
                .intro p {
                    font-size: 1rem;
                }
            }

            @media print {
                .intro {
                    text-align: center;
                    margin-bottom: 12pt;
                    page-break-after: avoid;
                }

                .intro h1 {
                    margin-bottom: 2pt;
                }

                .intro h2 {
                    margin-top: 2pt;
                    margin-bottom: 2pt;
                    border: none;
                    font-size: 12pt;
                }

                .intro p {
                    margin-bottom: 6pt;
                    font-size: 9pt;
                }

                .connect-links {
                    display: none;
                }
            }
        `,
    ];

    render() {
        return html`
            <div>
                <div class="intro">
                    <h1>Austin Orth</h1>
                    <h2>DevSecOps & SRE Professional</h2>
                    <p>
                        Your DevSecOps and SRE Guy, Creator of Pittsburgh Tech
                        Beat, M.B.A. w/ IT Mgmt. Focus, B.S. Comput. Sci., DJ,
                        Producer, Husband
                    </p>

                    <div class="connect-links">
                        <a
                            href="https://github.com/austinorth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/austinorth"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div class="section">
                    <h3>About</h3>
                    <p>Hey there! You've found my personal website.</p>

                    <p>
                        I'm a DevSecOps and Site Reliability Engineer with
                        extensive experience in cloud infrastructure, Kubernetes,
                        and building reliable systems at scale. I also have
                        experience building an SRE program from the ground up and
                        managing a team of SREs and Infrastructure Engineers. I
                        live in Pittsburgh with my wife and two cats, where I
                        enjoy making music with friends, discovering new
                        restaurants, and spending many summer evenings at PNC
                        Park watching the Pirates play.
                    </p>
                </div>
            </div>
        `;
    }
}
