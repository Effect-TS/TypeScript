import { HKT } from "../HKT";
import { Functor } from "../typeclasses";

export interface Left<E> {
  readonly _tag: "Left";
  readonly left: E
}

export interface Right<A> {
  readonly _tag: "Right";
  readonly right: A;
}

export type Either<E, A> = Left<E> | Right<A>

export interface EitherF extends HKT {
  readonly type: Either<never, this["A"]>;
}

/**
 * @ets implicit Functor Either
 */
export declare const FunctorEither: Functor<EitherF>;