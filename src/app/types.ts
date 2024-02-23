import assert from "assert";

export type Answer = {
    toDisplay:string,
    value: number,
    valueToSumTo: string[] | null | null[]};

export type Question = {
    title: string;
    options: Answer[];
};

export type desktopEnvironment = 'KDE' | 'GNOME' | 'XFCE' | 'Cinnamon' | 'LXQT' | 'WM' | 'Deepin' | 'Customizable' | 'OtherDE';


export type PackageManagers = 'APT' | 'PACMAN' | 'DNF' | 'OtherPM';


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

export type UserResults = {
    release: 'Rolling Release' | 'Stable';
    packageManager: PackageManagers | string;
    dificulty: 'Easy' | 'Middle' | 'Advanced' | 'Expert';
    desktopEnvironment: string;
    focusedOn: 'Desktop' | 'Server' | 'Enterprise' | 'Tools' ;
    rawTerminal: boolean;
    arm: boolean;
    easyGPU: boolean; //Install NVidia or AMD drivers by default, good for gaming.
};


export type answersCounter = {
    release: {
        rolling: number,
    },
    packageManager: {
        APT: number,
        DNF: number,
        PACMAN: number,
        OtherPM: number
    }
    desktopEnvironment: {
        KDE: number,
        GNOME: number,
        XFCE: number,
        Mate: number,
        Cinnamon: number,
        LXQT: number,
        WM: number,
        Deepin: number,
    },
    dificulty: 'Easy' | 'Middle' | 'Advanced' | 'Expert';
    focusedOn: 'Desktop' | 'Server' | 'Enterprise' | 'Tools' ;
    rawTerminal: boolean;
    ARM: boolean;
    gaming: boolean;

}



export type QuestionParameter = 'release' | 'basedOn' | 'dificulty' | 'desktopEnvironment' | 'focusedOn' | 'rawTerminal' | 'arm' | 'easyGPU';
