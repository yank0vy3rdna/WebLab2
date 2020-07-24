package models;

public class Entry {
    private Double X;
    private Double Y;
    private Double R;
    private boolean result;

    public Double getX() {
        return X;
    }

    public boolean isResult() {
        return result;
    }

    public void check() {
        if ((X == null) || (Y == null) || (R == null))
            throw new NullPointerException();
        if ((X == 0 && Math.abs(Y)<=R) || (Y == 0&& Math.abs(X)<=R))
            this.result = true;
        else if ((X > 0) && (Y < 0))
            this.result = false;
        else if ((X > 0) && (Y > 0)) {
            this.result = Y <= R - X;
        } else if ((X < 0) && (Y > 0)) {
            this.result = X * X + Y * Y <= R * R;
        }else if ((X < 0) && (Y < 0)) {
            this.result = (X>=-R/2)&&(Y>=-R);
        }
    }

    public void setX(Double x) {
        X = x;
    }

    public Double getY() {
        return Y;
    }

    public void setY(Double y) {
        Y = y;
    }

    public Double getR() {
        return R;
    }

    public void setR(Double r) {
        R = r;
    }

    public Entry() {
    }
}
