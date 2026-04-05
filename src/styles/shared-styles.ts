import { css } from 'lit';

export const sharedStyles = css`
    /* Typography hierarchy */
    h1 {
        font-size: 2.5rem;
        font-weight: 300;
        color: var(--accent-yellow);
        margin-bottom: 1rem;
        letter-spacing: -0.02em;
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 400;
        color: var(--accent-blue);
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--bg-lighter);
        padding-bottom: 0.5rem;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--accent-green);
        margin-bottom: 0.75rem;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--fg-primary);
        margin-bottom: 0.5rem;
    }

    h5 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--fg-secondary);
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--fg-secondary);
        margin-bottom: 1rem;
    }

    /* Links */
    a {
        color: var(--accent-orange);
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s ease;
    }

    a:hover {
        border-bottom-color: var(--accent-orange);
    }

    a:visited {
        color: var(--fg-muted);
    }

    a:focus {
        outline: 2px solid var(--accent-yellow);
        outline-offset: 2px;
    }

    /* Lists */
    ul,
    ol {
        margin-bottom: 1rem;
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 0.25rem;
        color: var(--fg-secondary);
    }

    /* Code */
    code {
        font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
        background-color: var(--bg-light);
        padding: 0.2em 0.4em;
        border-radius: 3px;
        color: var(--accent-green);
        font-size: 0.9em;
    }

    pre {
        background-color: var(--bg-light);
        padding: 1rem;
        border-radius: 4px;
        overflow-x: auto;
        margin-bottom: 1rem;
    }

    pre code {
        background: none;
        padding: 0;
    }

    /* Content sections */
    .section {
        margin-bottom: 3rem;
    }

    .section:last-child {
        margin-bottom: 0;
    }

    /* Print base styles */
    @media print {
        h1 {
            font-size: 16pt;
            page-break-after: avoid;
            margin-bottom: 4pt;
        }

        h2 {
            font-size: 13pt;
            page-break-after: avoid;
            margin-top: 8pt;
            margin-bottom: 4pt;
            border-bottom: 0.5pt solid var(--bg-lighter);
        }

        h3 {
            font-size: 11pt;
            page-break-after: avoid;
            margin-bottom: 2pt;
        }

        h4 {
            font-size: 10pt;
            page-break-after: avoid;
            margin-bottom: 1pt;
        }

        ul,
        ol {
            margin-bottom: 4pt;
            padding-left: 12pt;
        }

        li {
            margin-bottom: 1pt;
            font-size: 9pt;
            line-height: 1.1;
        }

        p {
            margin-bottom: 4pt;
            font-size: 10pt;
        }

        a {
            color: var(--fg-primary);
            text-decoration: none;
            border: none;
        }
    }
`;
