interface Course {
  title: string;
  credit: number;
}

type CourseReadOnly = {
  readonly [K in keyof Course]: Course[K];
};

type CourseReadOnlyWithSemaster = CourseReadOnly & { semaster: string };

type CourseOptional = {
  [K in keyof Course]?: Course[K];
};

type CourseReadOnlyReauired = {
  readonly [K in keyof CourseOptional]-?: CourseOptional[K];
};
