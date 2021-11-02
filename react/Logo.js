export default function Logo({size = '20'}){
    return `
    <svg width="${size}" height="${size}" class="k-rotating-8">
        <circle cx="50%" cy="50%" r="40%" stroke="olive" stroke-width="12%" fill="chartreuse" />
        
        <circle cx="50%" cy="35%" r="7%"  fill="green" />
        <circle cx="65%" cy="45%" r="7%"  fill="green" />
        <circle cx="60%" cy="65%" r="7%"  fill="green" />
        <circle cx="40%" cy="65%" r="7%"  fill="green" />
        <circle cx="35%" cy="45%" r="7%"  fill="green" />
        
    </svg>
        `
}