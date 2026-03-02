export interface City {
    id: string;
    name: string;
    imageUrl: string;
    country: string;
}

export const cities: City[] = [
    {
        id: "paris",
        name: "Paris",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
        country: "France",
    },
    {
        id: "new-york",
        name: "New York",
        imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000",
        country: "USA",
    },
    {
        id: "tokyo",
        name: "Tokyo",
        imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1000",
        country: "Japan",
    },
    {
        id: "london",
        name: "London",
        imageUrl: "https://images.unsplash.com/photo-1513635269975-5969336ac1fc?auto=format&fit=crop&q=80&w=1000",
        country: "UK",
    },
    {
        id: "rome",
        name: "Rome",
        imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1000",
        country: "Italy",
    },
    {
        id: "sydney",
        name: "Sydney",
        imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1000",
        country: "Australia",
    },
    {
        id: "rio",
        name: "Rio de Janeiro",
        imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=1000",
        country: "Brazil",
    },
    {
        id: "dubai",
        name: "Dubai",
        imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
        country: "UAE",
    },
    {
        id: "istanbul",
        name: "Istanbul",
        imageUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=1000",
        country: "Turkey",
    },
    {
        id: "san-francisco",
        name: "San Francisco",
        imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=1000",
        country: "USA",
    },
    {
        id: "amsterdam",
        name: "Amsterdam",
        imageUrl: "https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?auto=format&fit=crop&q=80&w=1000",
        country: "Netherlands",
    },
    {
        id: "singapore",
        name: "Singapore",
        imageUrl: "https://images.unsplash.com/photo-1525625299388-1ca9c47101ad?auto=format&fit=crop&q=80&w=1000",
        country: "Singapore",
    }
];

// Helper to get random incorrectly specified choices
export const getRandomChoices = (correctCity: City, count = 4): string[] => {
    const otherCities = cities.filter(c => c.id !== correctCity.id);
    // Shuffle other cities
    const shuffled = [...otherCities].sort(() => 0.5 - Math.random());

    // Pick the required count - 1 to leave room for the correct answer
    const choices = shuffled.slice(0, count - 1).map(c => c.name);
    choices.push(correctCity.name);

    // Shuffle the final choices array
    return choices.sort(() => 0.5 - Math.random());
};
