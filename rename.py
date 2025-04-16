def rename_files(directory, count):
    import os

    # Get a list of files in the specified directory
    files = os.listdir(directory)

    # Sort files to ensure consistent renaming
    files.sort()

    # Rename files sequentially
    for i, filename in enumerate(files[:count], start=1):
        # Construct the new filename
        new_name = f"{i}{os.path.splitext(filename)[1]}"
        # Create full paths for the old and new filenames
        old_file = os.path.join(directory, filename)
        new_file = os.path.join(directory, new_name)
        
        # Rename the file
        os.rename(old_file, new_file)

    print(f"Renamed {min(count, len(files))} files in '{directory}'")

rename_files("C:\\karthik_c\\work\\intern\\Fluencer_Digital\\lineup\\lineup_web\\public\\knowmore\\flags", 17)