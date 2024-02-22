export type Answer = {
    toDisplay:string,
    value: number,
    valueToSumTo: string[] | null | null[]};

export type Question = {
    title: string;
    options: Answer[];
};

export type desktopEnvironment = 'KDE' | 'GNOME' | 'XFCE' | 'Mate' | 'Cinnamon' | 'LXQT' | 'WM' | 'Deepin' | 'Customizable' | 'Other';


export type PackageManagers = 'APT' | 'PACMAN' | 'DNF';


export type LinuxDistribution = {
    name: string;
    logo: string;
    description: string;
    release: 'Rolling Release' | 'Stable';
    packageManager: PackageManagers | string;
    basedOn: 'Arch' | 'Debian' | 'Red Hat' | 'Other';
    dificulty: 'Easy' | 'Middle' | 'Advanced' | 'Expert';
    desktopEnvironment: desktopEnvironment;
    focusedOn: 'Desktop' | 'Server' | 'Enterprise' | 'Tools' ;
    rawTerminal: boolean;
    flavors: desktopEnvironment[] ;
    arm: boolean;
    easyGPU: boolean; //Install NVidia or AMD drivers by default, good for gaming.
        // Add more parameters as needed
};

export type QuestionParameter = 'release' | 'basedOn' | 'dificulty' | 'desktopEnvironment' | 'focusedOn' | 'rawTerminal' | 'arm' | 'easyGPU';
