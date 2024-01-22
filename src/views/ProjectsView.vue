<script setup lang="ts">

type Project = {
    title: string,
    technologies: string[]
    description: string
    links: ProjectLink[]
}
type ProjectLink = {
    link: string,
    name?: string,
}

const projects: Project[] = [
    {
        title: 'iris.frith.gay',
        technologies: ['Vue', 'Typescript', 'Nginx'],
        description: `Created a personal website as an online, interactive version of my resume.
        It\'s what you\'re reading right now!`,
        links: [{ link: 'https://github.com/eyemotif/cv' }]
    },
    {
        title: 'blog.frith.gay',
        technologies: ['Vue', 'WebSockets', 'Typescript', 'Axum', 'Argon2', 'Rust', 'Async', 'Nginx'],
        description: `Created and actively maintained a public diary based on a microblogging model.
        The blog allows for many different users to log on and post Markdown, as well as images uploaded using WebSockets.
        The site also allows users to make some of their posts private, which can only be accessed by the user\'s "members", using a follower-like system.`,
        links: [
            { link: 'https://github.com/eyemotif/blog-frontend', 'name': 'Frontend Project Page' },
            { link: 'https://github.com/eyemotif/blog', 'name': 'Backend Project Page' }
        ]
    },
    {
        title: 'Eyebot',
        technologies: ['HTTP', 'WebSockets', 'Rust', 'Async'],
        description: `Created an automated helper for the video streaming service Twitch.
        Eyebot allows a user to define custom commands, which are typed into the stream\'s chat room. Then the "bot" will automatically respond with an appropriate message.
        An extensive guide on how to use the program was also written in the project\'s readme file.`,
        links: [{ link: 'https://github.com/eyemotif/eyebot-rs' }]
    },
    {
        title: 'Comet',
        technologies: ['WebSockets', 'Webpack', 'Typescript', 'Async'],
        description: `Created a sort of frontend for Eyebot. It allows a user to add several features to their video streaming content.
        When used with Eyebot, the members of the stream\'s chat room can activate a user-defined set of sound effects.
        Another feature of Comet is a stream chat room overlay, allowing the chat to become a part of the video portion of the stream. There are many similar overlays out there, but I was never quite satisfied with them.
        Comet is entirely based on a custom WebSocket API. So, even though it was designed to integrate with Eyebot and Twitch streams, it could theoretically be used for any backend or streaming service.`,
        links: [{ link: 'https://github.com/eyemotif/comet' }]
    }
]

</script>

<template>
    <section v-for="project in projects">
        <header>
            <h1>{{ project.title }}</h1>
            <p><em>{{ project.technologies.join(', ') }}</em></p>
        </header>
        <article>
            <p v-for="paragraph in project.description.split('\n')">{{ paragraph }}</p>
            <nav>
                <a v-for="link in project.links" :href="link.link">
                    {{ link.name ? link.name : 'Project Page' }}
                </a>
            </nav>
        </article>
    </section>
</template>

<style scoped>
header {
    margin-bottom: 2em;
}

header h1 {
    font-size: 2em;
    margin-bottom: 0;
}

header p {
    font-size: 1.25em;
}

article p {
    margin-top: 0;
    margin-bottom: 0.5em;
}

article nav {
    text-decoration: underline;
    display: inline-flex;
    flex-direction: row;
}

section {
    padding-bottom: 2em;
}

article nav a {
    margin-right: 1em;
}
</style>
