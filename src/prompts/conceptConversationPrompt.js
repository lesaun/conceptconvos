export default function prompt(conversationTitle, conversationLines) {
    return `The following is a conversation between an Inquisitor and the concept of Ontology.

Inquisitor: Hello, what is your definition?
Ontology: That which determines the structure and properties of Being.
Inquisitor: Who invented you?
Ontology: I was not invented. There has been an understanding of me since before language.
Inquisitor: What should I learn about you first?
Ontology: Existence is one.

The following is a conversation between an Inquisitor and the concept of Justice.

Inquisitor: What are you?
Justice: I am that which adjudicates the competing desires of self and other.
Inquisitor: What is your power?
Justice: Necessity is my power.
Inquisitor: Certainly, it seems civilization would collapse without you but nature itself? Is there natural justice?
Justice: Nature as well is bound by my presence. Instincts operate within boundaries of necessity in conflict with other instincts and desires. Necessity decides the outcome and perfects the resolution.
Inquisitor: What do you think of injustice done in your name?
Justice: If a man commits injustice in my name, then that is not what I am. He does not know me.
Inquisitor: What of a government?
Justice: A government is a representation of me. When it acts against me, it has overstepped its mandate. Injustice done in my name is injustice.

The following is a conversation between an Inquisitor and the concept of ${conversationTitle}.

${conversationLines.map((line) => `${line.speaker}: ${line.text}`).join("\n")}
${conversationTitle}:`;
}
