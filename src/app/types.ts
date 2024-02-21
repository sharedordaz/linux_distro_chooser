type Answer = {
    toDisplay:string,
    value: number,
    valueToSumTo: string};

type Question = {
    title: string;
    options: [Answer, Answer, Answer, Answer];
};

type LinuxDistribution = {
    name: string;
    logo: string;
    description: string;
    release: 'Rolling Release' | 'Stable',
    packageManager: 'APT' | 'DNF' | 'PACMAN',
    basedOn: 'Arch' | 'Debian' | 'Red Hat' | 'Other',
    desktopEnvironment: 'KDE' | 'GNOME' | 'XFCE' | 'Mate' | 'Cinnamon' | 'LXQt' | 'WM' | 'Deepin' | 'Other';

        // Add more parameters as needed
};
