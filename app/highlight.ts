import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import java from "highlight.js/lib/languages/java";
import plaintext from "highlight.js/lib/languages/plaintext";
import yaml from "highlight.js/lib/languages/yaml";
import diff from "highlight.js/lib/languages/diff";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("text", plaintext);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("diff", diff);
