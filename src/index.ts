type NumOrString = string[] | number[] | number | string | undefined;
type ArrayFilter<T> = T extends unknown[] ? T : never;
type ArrayOnly = ArrayFilter<NumOrString>;
