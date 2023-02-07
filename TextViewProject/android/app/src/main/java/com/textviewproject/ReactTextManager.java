package com.textviewproject;

import android.graphics.Color;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.text.ReactTextView;

public class ReactTextManager extends SimpleViewManager<ReactTextView> {

    ReactApplicationContext mCallerContext;

    public ReactTextManager(ReactApplicationContext reactContext) {
        mCallerContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "TextView";
    }

    @NonNull
    @Override
    protected ReactTextView createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        return new ReactTextView(mCallerContext);
    }

    @ReactProp(name = "text")
    public void setText(ReactTextView view, @Nullable String txt) {
        view.setText(txt);
    }


    @ReactProp(name = "color")
    public void setColor(ReactTextView view, @Nullable String colour) {
        view.setTextColor(Color.parseColor(colour));
    }
}
