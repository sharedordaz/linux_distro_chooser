type Answer = {
    toDisplay:string,
    value: number,
    valueToSumTo: string[]};

type Question = {
    title: string;
    options: Answer[];
};

type desktopEnvironment = 'KDE' | 'GNOME' | 'XFCE' | 'Mate' | 'Cinnamon' | 'LXQT' | 'WM' | 'Deepin' | 'Customizable' | 'Other';


type PackageManagers = 'APT' | 'PACMAN' | 'DNF';


type LinuxDistribution = {
    name: string;
    logo: string;
    description: string;
    release: 'Rolling Release' | 'Stable';
    packageManager: PackageManagers | string;
    basedOn: 'Arch' | 'Debian' | 'Red Hat' | 'Other';
    dificulty: 'Easy' | 'Middle' | 'Advanced' | 'Expert';
    desktopEnvironment: desktopEnvironment;
    focusedOn: 'Desktop' | 'Server' | 'Enterprise' | 'Performance' | 'Tools' ;
    rawTerminal: boolean;
    flavors: desktopEnvironment[] ;
    arm: boolean;
    easyGPU: boolean; //Install NVidia or AMD drivers by default, good for gaming.
        // Add more parameters as needed
};

type QuestionParameter = 'release' | 'basedOn' | 'dificulty' | 'desktopEnvironment' | 'focusedOn' | 'rawTerminal' | 'arm' | 'easyGPU';
