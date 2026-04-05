import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { sharedStyles } from '../styles/shared-styles.ts';

@customElement('page-resume')
export class PageResume extends LitElement {
    static styles = [
        sharedStyles,
        css`
            .resume-section {
                margin-bottom: 2.5rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid var(--bg-light);
            }

            .resume-section:last-child {
                border-bottom: none;
            }

            .job {
                margin-bottom: 2rem;
                padding-left: 1rem;
                border-left: 3px solid var(--bg-lighter);
            }

            .job:last-child {
                margin-bottom: 0;
            }

            .job h3 {
                margin-bottom: 0.25rem;
                color: var(--accent-yellow);
                font-size: 1.2rem;
            }

            .job h4 {
                margin-bottom: 0.25rem;
                color: var(--accent-blue);
                font-weight: 400;
                font-style: italic;
            }

            .job-dates {
                color: var(--fg-muted);
                font-size: 0.9rem;
                margin-bottom: 1rem;
                font-style: italic;
            }

            @media print {
                .resume-section {
                    page-break-inside: auto;
                    margin-bottom: 8pt;
                    border-bottom: none;
                }

                .job {
                    page-break-inside: auto;
                    margin-bottom: 6pt;
                    border-left: 1.5pt solid var(--bg-lighter);
                    padding-left: 6pt;
                }

                .job-dates {
                    font-size: 9pt;
                    margin-bottom: 3pt;
                }

                /* Strategic page breaks */
                .resume-section:nth-of-type(3) {
                    page-break-before: page;
                }

                /* Compact skills section */
                .resume-section:last-child .job {
                    margin-bottom: 3pt;
                }

                .resume-section:last-child ul {
                    margin-bottom: 2pt;
                }
            }
        `,
    ];

    render() {
        return html`
            <div>
                <h1>Resume</h1>

                <div class="resume-section">
                    <h2>Work Experience</h2>

                    <div class="job">
                        <h3>Machinify, Palo Alto, CA (Remote)</h3>
                        <h4>Staff Site Reliability Engineer</h4>
                        <div class="job-dates">March 2026 - Present</div>
                        <h4>Senior Site Reliability Engineer</h4>
                        <div class="job-dates">January 2026 - March 2026</div>
                        <h4>Senior DevOps Engineer</h4>
                        <div class="job-dates">March 2025 - January 2026</div>
                        <ul>
                            <li>
                                Using Helm, ArgoCD, Terraform, and Crossplane to
                                operate and maintain 3 AWS EKS clusters in a
                                multi-account configuration with hundreds of
                                nodes ingesting and serving petabytes of data.
                            </li>
                            <li>
                                Refactoring Ansible playbooks to containerize and
                                migrate Java/Scala applications to Kubernetes.
                            </li>
                            <li>
                                Writing Python and Docker tooling to deploy and
                                update custom AI/ML models automatically.
                            </li>
                            <li>
                                Managing the company's Azure AI Foundry for LLM
                                access.
                            </li>
                            <li>
                                Regularly on-call, providing 24/7 production
                                support with Grafana, Loki, and Prometheus
                                metrics.
                            </li>
                            <li>
                                Using Claude Code with Opus 4.6, accelerating my
                                engineering capabilities in all of the above
                                areas.
                            </li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>MoveHQ, Columbus, OH (Remote)</h3>
                        <h4>Senior DevOps Engineer II</h4>
                        <div class="job-dates">June 2024 - March 2025</div>
                        <ul>
                            <li>
                                Used Helm, FluxCD, Terraform (OpenTofu), and
                                Spacelift to manage and develop 10+ Kubernetes
                                clusters on AWS GovCloud with FedRAMP compliance.
                            </li>
                            <li>
                                Wrote and maintained GitHub Actions to build and
                                ship Docker images, AMIs, and Cloudflare Worker
                                code bundles, as well as running tests across
                                various codebases.
                            </li>
                            <li>
                                Was part of the on-call rotation providing 24/7
                                production support using DataDog to setup
                                logging, monitoring, and alerting capabilities.
                            </li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>Niche.com, Pittsburgh, PA (Remote)</h3>
                        <h4>
                            Senior Manager, Reliability & Infrastructure
                            Engineering
                        </h4>
                        <div class="job-dates">
                            March 2024 – June 2024
                        </div>
                        <h4>Manager, Site Reliability Engineering</h4>
                        <div class="job-dates">
                            January 2021 – March 2024
                        </div>
                        <ul>
                            <li>
                                Created alignment across the company towards the
                                adoption of GitOps, continuous delivery,
                                observability tooling, and a reliability
                                framework.
                            </li>
                            <li>
                                Planned the project for and promoted adoption of
                                FluxCD GitOps deployment tooling.
                            </li>
                            <li>
                                Managed a team of four SREs and two
                                Infrastructure Engineers, hired and onboarded
                                each.
                            </li>
                            <li>
                                Built out security and cost reporting for team
                                operations.
                            </li>
                        </ul>

                        <h4>Site Reliability Engineer</h4>
                        <div class="job-dates">
                            July 2019 – January 2021
                        </div>
                        <h4>Infrastructure Engineer</h4>
                        <div class="job-dates">
                            July 2018 – July 2019
                        </div>
                        <h4>Associate Infrastructure Engineer</h4>
                        <div class="job-dates">
                            August 2017 – July 2018
                        </div>
                        <ul>
                            <li>
                                Led the effort to migrate the company's build
                                processes from Jenkins to GitHub Actions.
                            </li>
                            <li>
                                Migrated Golang backend from EC2 managed with
                                Terraform to Kubernetes with kOps and Helm.
                            </li>
                            <li>
                                Participated in and set standards for 24/7
                                on-call rotation and incident response.
                            </li>
                            <li>
                                Set up a bare metal Postgres instance and tuned
                                from scratch, then automated surrounding data
                                transport processes w/ Docker, Golang, Python,
                                and AWS Lambda serverless functions.
                            </li>
                            <li>
                                Coded and maintained Terraform-managed Production
                                web application stack in AWS.
                            </li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>PPG Industries, Pittsburgh, PA</h3>
                        <h4>IT Customer Support Analyst</h4>
                        <div class="job-dates">
                            January 2017 – August 2017
                        </div>
                        <ul>
                            <li>
                                Provided international email and phone technical
                                support to PPG employees, including Citrix, SAP,
                                Oracle, and Active Directory account maintenance.
                            </li>
                            <li>
                                Worked with higher level teams to troubleshoot
                                and resolve complex issues with technical
                                infrastructure. Taught myself Ruby during
                                personal development time.
                            </li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>
                            University of Pittsburgh GSPIA IT Dept., Pittsburgh,
                            PA
                        </h3>
                        <h4>Student Assistant</h4>
                        <div class="job-dates">
                            September 2016 – December 2016
                        </div>
                    </div>

                    <div class="job">
                        <h3>
                            Waynesburg University ITS Helpdesk, Waynesburg, PA
                        </h3>
                        <h4>ITS Student Support Specialist</h4>
                        <div class="job-dates">
                            September 2012 – May 2016
                        </div>
                    </div>

                    <div class="job">
                        <h3>
                            FBI Center (CJIS), Clarksburg, WV and Pittsburgh FBI
                            Field Office
                        </h3>
                        <h4>Student Workforce Trainee</h4>
                        <div class="job-dates">
                            June 2015 – April 2016
                        </div>
                    </div>
                </div>

                <div class="resume-section">
                    <h2>Education</h2>

                    <div class="job">
                        <h3>Master of Business Administration</h3>
                        <h4>Southern New Hampshire University</h4>
                        <ul>
                            <li>Graduated September 2023</li>
                            <li>Focus in IT Management</li>
                            <li>Academic Dean's List; Honors; GPA 4.0</li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>9 Master's Level Computer Science Credits</h3>
                        <h4>University of Pittsburgh</h4>
                        <ul>
                            <li>Awarded December 2016</li>
                        </ul>
                    </div>

                    <div class="job">
                        <h3>Bachelor of Science in Computer Science</h3>
                        <h4>Waynesburg University</h4>
                        <ul>
                            <li>
                                Graduated Summa Cum Laude with Honors in May of
                                2016
                            </li>
                            <li>Minor: Music</li>
                            <li>Academic Dean's List; GPA 3.96</li>
                        </ul>
                    </div>
                </div>

                <div class="resume-section">
                    <h2>Skills</h2>

                    <div style="margin-bottom: 1.5rem">
                        <h3>Languages - Proficient</h3>
                        <ul>
                            <li>Bash</li>
                            <li>HCL</li>
                            <li>Helm chart YAML</li>
                            <li>Kubernetes YAML</li>
                            <li>Python</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 1.5rem">
                        <h3>Languages - Familiar</h3>
                        <ul>
                            <li>Golang</li>
                            <li>JavaScript</li>
                            <li>Ruby</li>
                            <li>Rust</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 1.5rem">
                        <h3>My Favorite Tools</h3>
                        <ul>
                            <li>FluxCD</li>
                            <li>GitHub Actions</li>
                            <li>Helm</li>
                            <li>Kubernetes</li>
                            <li>Prometheus</li>
                            <li>Terraform/OpenTofu</li>
                        </ul>
                    </div>

                    <div style="margin-bottom: 1.5rem">
                        <h3>Managerial Skills</h3>
                        <ul>
                            <li>Agile ceremonies</li>
                            <li>Cost tracking and reporting</li>
                            <li>Mentorship and coaching</li>
                            <li>Organizational strategy</li>
                            <li>Project management</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Other Software I Have Used Regularly/Maintained</h3>
                        <ul>
                            <li>Apache Kafka, bare metal and MSK</li>
                            <li>ArgoCD</li>
                            <li>AWS EC2, EKS, Lambda, RDS, VPC</li>
                            <li>Claude Code</li>
                            <li>Crossplane</li>
                            <li>DataDog</li>
                            <li>Grafana Cloud</li>
                            <li>kOps</li>
                            <li>neovim w/ tmux</li>
                            <li>New Relic</li>
                            <li>NGINX</li>
                            <li>Postgres</li>
                            <li>Sumo Logic</li>
                            <li>Wiz Cloud Security</li>
                        </ul>
                    </div>
                </div>

                <div class="resume-section">
                    <h2>Service Activities</h2>
                    <ul>
                        <li>
                            Volunteer staff at Deer Valley YMCA Camp,
                            occasionally on weekends, 2010 – present
                        </li>
                        <li>
                            Volunteer speaker at Waynesburg University Computer
                            Science Club, 2024 – present
                        </li>
                    </ul>
                </div>

                <div class="resume-section">
                    <h2>Scholarships and Awards</h2>
                    <ul>
                        <li>
                            NFFTY Audience Award for Younger Finland film,
                            October, 2018
                        </li>
                        <li>
                            Quality Champion at PPG Global IT Service Desk, May,
                            2017
                        </li>
                        <li>
                            Waynesburg University Presidential Honor Scholarship,
                            2012 – 2016
                        </li>
                        <li>
                            Waynesburg University Computer Science Departmental
                            Scholarship, 2012 – 2016
                        </li>
                        <li>
                            Made a Difference; Deer Valley YMCA Family Camp
                            Summer Staff Award, 2014
                        </li>
                        <li>
                            Academic Excellence Award from the Computer Science
                            Department of Waynesburg University, 2014
                        </li>
                        <li>
                            Rookie of the Year; Deer Valley YMCA Family Camp
                            Summer Staff Award, 2013
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}
