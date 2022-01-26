import { HKT, Kind, Typeclass } from "./HKT";

export interface Functor<F extends HKT> extends Typeclass<F> {
  readonly map: <A, B>(fa: Kind<F, A>, f: (a: A) => B) => Kind<F, B>;
}
