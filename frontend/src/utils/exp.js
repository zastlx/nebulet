const BaseXP = 100;
const Multiplier = 1.5;

export function calcXPFromLevel(level) {
    return BaseXP * (Multiplier ** level);
}

export function calcLevelFromXP(exp) {
    let level = 0;
    let currentXP = 0;
    while (exp >= currentXP) {
        level++;
        currentXP = calcXPFromLevel(level);
    }
    return level - 1;
}