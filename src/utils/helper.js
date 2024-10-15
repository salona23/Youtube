export const generateRandomName = () => {
    const firstNames = [
        "Liam", "Emma", "Noah", "Olivia", "Ava", "Elijah", "Sophia", "James", "Isabella", "Lucas",
        "Mason", "Mia", "Ethan", "Charlotte", "Harper", "Aiden", "Amelia", "Logan", "Aria", "Jackson",
        "Scarlett", "Caden", "Grace", "Oliver", "Chloe", "Gabriel", "Ella", "Zoe", "Henry", "Ella",
        "Owen", "Sophie", "Samuel", "Victoria", "David", "Hannah", "Wyatt", "Addison", "Joseph", "Lily",
        "Matthew", "Nora", "Alexander", "Stella", "Daniel", "Mila", "Luke", "Aubrey", "Caleb", "Layla"
    ];
    
    return  firstNames[Math.floor(Math.random() * firstNames.length)];

}

export const generateRandomComment = () => {
    const phrases = [
        "Great job!",
        "I love this!",
        "This is amazing!",
        "Really interesting read.",
        "I learned a lot from this.",
        "Well done!",
        "This is so helpful!",
        "Can't wait to try this out.",
        "Very informative.",
        "This made my day!",
        "Fantastic work!",
        "Such a great perspective.",
        "Incredible insights!",
        "I appreciate the effort you put into this.",
        "This was exactly what I needed.",
        "Brilliant!",
        "You nailed it!",
        "Very well articulated.",
        "This is super useful!",
        "I couldn't agree more!",
        "So inspiring!",
        "Amazing content!",
        "This is pure gold!",
        "You have a unique style.",
        "I appreciate your attention to detail.",
        "Keep up the great work!",
        "This is thought-provoking.",
        "What a wonderful read!",
        "Your ideas are refreshing.",
        "I can relate to this.",
        "This deserves more attention!",
        "You've done an outstanding job!",
        "Such clarity in your writing.",
        "I'm impressed!",
        "This is a breath of fresh air!",
        "You always deliver!",
        "This is super engaging!",
        "So well explained!",
        "You've got a talent for this.",
        "I’m a fan of your work!",
        "You make complex topics easy to understand.",
        "This really resonates with me.",
        "Such great advice!",
        "I'm excited to share this!",
        "What a compelling argument!",
        "You’ve opened my eyes to new ideas.",
        "This is packed with value!",
        "I can’t wait to read more from you!",
        "Your enthusiasm is contagious.",
        "This hit home for me!",
        "So much wisdom here!",
        "You've inspired me to take action.",
        "Thank you for sharing your thoughts!",
        "This is definitely worth sharing!"
    ];

    return  phrases[Math.floor(Math.random() * phrases.length)];
    
}
