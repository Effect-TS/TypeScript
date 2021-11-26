import { T } from "./prelude";

export const res = pipe(
    T.Do,
    T.bind("a", () => T.succeed(() => 0)),
    T.bind("b", () => T.succeed(() => 1))
);