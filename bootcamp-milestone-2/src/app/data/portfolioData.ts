export type Project = {
    title: string;
    description: string;
    technologies: string[];
    github: string;
}

export const projects: Project[] = [
    {
        title: "Grade Distribution Transformer",
        description: "A python script that transforms .xlsx files into usuable .csv files.",
        technologies: ['python', 'pandas', 'openpyxl'],
        github: "https://github.com/smcgrades/grade_distribution_transformer"
    },
    {
        title: "BLOCKTALK",
        description: "A Snap Mini built on React Native that allows users to create and share stories (by using the native camera to upload photos, take photos, or record videos) answering prompts about incarceration.",
        technologies: ['React Native', 'Expo', 'Firebase (FireStore & Storage)'],
        github: "https://github.com/asarelcastellanos/BLOCKTALK"
    },
    {
        title: "Vicious Streak Salon",
        description: "A website for Vicious Streak Salon built on Next.js.",
        technologies: ['Next.js', 'React', 'TailwindCSS', 'DaisyUI', 'Typeform', 'Vercel'],
        github: "https://github.com/asarelcastellanos/salon",
    },
    {
        title: "Flix",
        description: "An iOS app that allows users to see movies now playing and their summaries.",
        technologies: ['Swift', 'Movie Database API'],
        github: "https://github.com/asarelcastellanos/flix"
    },
    {
       title: "Tweeter",
       description: "A twitter clone built on Swift.",
       technologies: ['Swift', 'Twitter API'],
       github: "https://github.com/asarelcastellanos/tweeter"
    },
    {
        title: "Parstagram",
        description: "An iOS instagram clone.",
        technologies: ['Swift', 'Parse'],
        github: "https://github.com/asarelcastellanos/parstagram"
    }

]