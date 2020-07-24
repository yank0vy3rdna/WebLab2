package models;

import java.util.ArrayList;
import java.util.List;

public class EntryList {
    List<Entry> entryList;

    public List<Entry> getEntryList() {
        return entryList;
    }

    public void addEntry(Entry entry) {
        this.entryList.add(0, entry);
    }

    public EntryList(){
        entryList = new ArrayList<>();
    }
}
