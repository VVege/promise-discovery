enum VGPromiseState {
  pending,
  fulfilled = 0,
  rejected,
}
export class VGPromise {
  then: () => void;
  catch: (err: unknown) => void;
  private _state = VGPromiseState.pending;
  private _resolve: (() => void) | undefined;
  private _reject: ((err: unknown) => void) | undefined;

  constructor(ddd: (resolve: () => void, reject: (err: unknown) => void) => void) {

    this._state = VGPromiseState.pending;
    this._resolve = () => {
      this._state = VGPromiseState.fulfilled;
      this.then();
    };

    this._reject = (err: unknown) => {
      this._state = VGPromiseState.rejected;
      this.catch(err);
    };

    this.then = () => {

    };
    this.catch = (err: unknown) => {

    };
    ddd(this._resolve, this._reject);
  }
}

const vgP = new VGPromise((resolve, reject) => {
  for (let index = 0; index < 1000; index++) {
    console.log(index);
  }
  resolve();
});

new Promise<void>((resolve, reject) => {
  
})
